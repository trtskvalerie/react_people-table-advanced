# React - People table
- Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://trtskvalerie.github.io/react_people-table-advanced/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

[PR](https://github.com/mate-academy/react_people-table-advanced/compare/master...trtskvalerie:develop?expand=1)

    - When the person is added you should navigate back to the `/people` page
1. (* OPTIONAL) Add data validations:
    - `name` should contain only letters and spaces
    - `born` and `died` are valid years between `1400` and the current year
    - `died` should be disabled if `born` is empty
    - `died - born` should be >= 0 and < 150
    - make `mother` and `father` field optional
    - update the list of `mothers` and `fathers` according to the entered `born` year (they must be alive)
    (selects should be empty and disabled before the born year was entered)
