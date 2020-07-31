import React from "react";
import level from "./dataj/level.json";
import dataset from "./dataj/dataset.json";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      roleid: {},
      options: [],
      checked: false,
      id: 0
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    //e.preventDefault();
    // current array of options
    const options = this.state.options;
    let index;

    // check if the check box is checked or unchecked
    if (e.target.checked) {
      // add the numerical value of the checkbox to options array
      options.push(+e.target.value);
    } else {
      // or remove the value from the unchecked checkbox from the array
      index = options.indexOf(+e.target.value);
      options.splice(index, 1);
    }

    // sort the array
    options.sort();
    //  e.persist();
    // update the state with the new array of options
    // this.setState({ options: options });
  }

  submit() {
    console.clear();
    //  console.warn(this.state.options);
    this.state.options.map((number, index) =>
      //you can put your code at here for insertin
      console.warn(number)
    );
  }
  render() {
    const SimpleList = ({ id }) => (
      <table border="1">
        {dataset.datasets
          .filter(data => data.id === id)
          .map((filteredName, index) => (
            <tr key={index}>
              <td>
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="roleid"
                  key={index}
                  id={filteredName.id}
                  value={filteredName.id}
                  onChange={this.onChange}
                />
              </td>
              <td>{filteredName.id}</td>
              <td>{filteredName.name}</td>
            </tr>
          ))}
      </table>
    );
    return (
      <React.Fragment>
        {level.datasets.map((data, key) => (
          <div>
            <SimpleList id={data.id} />
          </div>
        ))}
        <button onClick={() => this.submit()}>Submit</button>
      </React.Fragment>
    );
  }
}
export default Home;
