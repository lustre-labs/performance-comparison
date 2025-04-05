import gleam/list
import gleam/pair
import gleam/set.{type Set}
import implementation.{type Implementation, Implementation}
import lustre
import lustre/attribute
import lustre/effect.{type Effect}
import lustre/element.{type Element}
import lustre/element/html
import lustre/event
import measure.{type Measurement, type Results}
import step.{type Step}

const num_items = 100

pub const implementations: List(Implementation) = [
  Implementation(name: "Lustre", version: "5.0.0", optimised: False),
  Implementation(name: "Lustre", version: "4.6.4", optimised: False),
]

pub fn main() {
  let app = lustre.application(init, update, view)
  let assert Ok(_) = lustre.start(app, "body", Nil)
  Nil
}

type Model {
  NotRunYet(selected: Set(Implementation))
  Finished(
    selected: Set(Implementation),
    results: List(#(Implementation, Results)),
  )
  Running(
    selected: Set(Implementation),
    current_implementation: Implementation,
    current_measurements: List(Measurement),
    implementations: List(Implementation),
    measurements: List(#(Implementation, List(Measurement))),
    steps: List(Step),
    can_unload: Bool,
  )
}

fn is_running(model: Model) -> Bool {
  case model {
    Running(..) -> True
    _ -> False
  }
}

fn init(_flags) -> #(Model, Effect(Msg)) {
  let model = NotRunYet(selected: set.new())
  #(model, effect.none())
}

type Msg {
  UserToggledImplementation(Implementation, Bool)
  UserClickedStart
  //
  ImplementationLoaded
  InstrumentationSetup
  StepExecuted
  MeasurementReceived(Measurement)
  TryUnload
}

fn update(model: Model, msg: Msg) -> #(Model, Effect(Msg)) {
  case msg {
    UserToggledImplementation(benchmark, True) -> {
      let model = update_selected(model, set.insert(_, benchmark))
      #(model, effect.none())
    }
    UserToggledImplementation(benchmark, False) -> {
      let model = update_selected(model, set.delete(_, benchmark))
      #(model, effect.none())
    }
    UserClickedStart -> {
      let selected =
        implementations
        |> list.filter(set.contains(model.selected, _))

      let model = case selected {
        [] -> model
        [current_implementation, ..implementations] ->
          Running(
            selected: model.selected,
            current_implementation:,
            current_measurements: [],
            implementations:,
            steps: step.add_complete_delete(num_items),
            measurements: [],
            can_unload: False,
          )
      }

      #(model, effect.none())
    }

    ImplementationLoaded ->
      case model {
        Running(..) -> #(
          model,
          implementation.setup_instrumentation(InstrumentationSetup),
        )
        _ -> #(model, effect.none())
      }

    MeasurementReceived(measurement) ->
      case model {
        Running(..) -> {
          let current_measurements = [measurement, ..model.current_measurements]
          let model = Running(..model, current_measurements:, can_unload: False)
          #(model, effect.none())
        }
        _ -> #(model, effect.none())
      }

    InstrumentationSetup | StepExecuted -> step(model)

    TryUnload ->
      case model {
        Running(can_unload: True, implementations: [next, ..rest], ..) -> {
          let model =
            Running(
              ..model,
              current_implementation: next,
              current_measurements: [],
              implementations: rest,
              measurements: [
                #(model.current_implementation, model.current_measurements),
                ..model.measurements
              ],
              steps: step.add_complete_delete(num_items),
              can_unload: False,
            )

          #(model, effect.none())
        }

        Running(can_unload: True, implementations: [], ..) -> {
          let results =
            [
              #(model.current_implementation, model.current_measurements),
              ..model.measurements
            ]
            |> list.map(pair.map_second(_, measure.to_results))
            |> list.reverse

          let model = Finished(selected: model.selected, results:)
          #(model, effect.none())
        }

        Running(can_unload: False, ..) -> {
          #(Running(..model, can_unload: True), wait_for_next_frame(TryUnload))
        }

        _ -> #(model, effect.none())
      }
  }
}

fn step(model: Model) -> #(Model, Effect(Msg)) {
  case model {
    Running(steps: [step, ..steps], ..) -> {
      let model = Running(..model, steps:)
      #(model, step.run(step, StepExecuted))
    }

    Running(steps: [], ..) -> {
      let model = Running(..model, can_unload: True)
      #(model, wait_for_next_frame(TryUnload))
    }

    _ -> #(model, effect.none())
  }
}

fn wait_for_next_frame(msg) {
  use dispatch <- effect.after_paint
  dispatch(msg)
}

fn update_selected(model, f) {
  case model {
    NotRunYet(..) -> NotRunYet(selected: f(model.selected))
    Finished(..) -> Finished(..model, selected: f(model.selected))
    Running(..) -> Running(..model, selected: f(model.selected))
  }
}

fn view(model: Model) -> Element(Msg) {
  element.fragment([
    view_picker(model),
    case model {
      NotRunYet(..) -> view_info()
      Finished(results:, ..) -> view_results(results)
      Running(current_implementation:, ..) ->
        implementation.view_frame(
          current_implementation,
          ImplementationLoaded,
          MeasurementReceived,
        )
    },
  ])
}

fn view_picker(model: Model) -> Element(Msg) {
  let running = is_running(model)

  html.form(
    [
      attribute.id("picker"),
      attribute.disabled(running),
      event.on_submit(UserClickedStart),
    ],
    [
      html.ul(
        [attribute.classes([#("running", running)])],
        list.map(implementations, fn(impl) {
          let checked = set.contains(model.selected, impl)
          let on_check = UserToggledImplementation(impl, _)
          html.li([], [implementation.view_selector(impl, checked, on_check)])
        }),
      ),
      html.button([attribute.type_("submit")], [html.text("Start")]),
    ],
  )
}

fn view_info() {
  html.div([attribute.id("info")], [
    html.h1([], [html.text("Performance Comparison - TodoMVC")]),
    // html.p([], [
    //   html.text("This page lets you test the results of "),
    //   html.a(
    //     [attribute.href("http://elm-lang.org/blog/blazing-fast-html-round-two")],
    //     [html.text("Blazing Fast HTML")],
    //   ),
    //   html.text(
    //     "for yourself.",
    //   ),
    // ]),
    html.p([], [
      html.text(
        "Controls are on the right. Pick which implementations you want to race and press run. Try it in different browsers!",
      ),
    ]),
    html.h3([], [html.text("Methodology Notes")]),
    html.p([], [
      html.text(
        "To compare different frontend tools, you need to implement something in each one with exactly the same functionality. The ",
      ),
      html.a([attribute.href("http://todomvc.com")], [html.text("TodoMVC")]),
      html.text(
        " project is nice because you often get idiomatic implementations from people close to the various projects. So the code is fair, and the app itself is complex ",
      ),
      html.i([], [html.text("enough")]),
      html.text(
        "that you can do some benchmarking that can reasonably be generalized. Is modifying items in the middle of a list fast? Can the implementation tell the difference between remove-the-first-item and change-99-items-and-remove-the-last-one? Etc.",
      ),
    ]),
    html.p([], [
      html.text("The idea for this benchmark was "),
      html.a(
        [attribute.href("http://elm-lang.org/blog/blazing-fast-html-round-two")],
        [html.text("this blog post")],
      ),
      html.text(" by Evan Czaplicki."),
    ]),
  ])
}

fn view_results(data: List(#(Implementation, Results))) -> Element(msg) {
  data
  |> list.map(pair.map_first(_, implementation.to_string))
  |> measure.view
}
