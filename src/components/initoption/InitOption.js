import React, { Component } from 'react';
import '../../App.css';

export default class InitOption extends Component {
    render() {
        return (
            <div>
                <h3 class="h5">Initialize this repository with:</h3>
                <p class="text-gray" style={{fontSize:14}}>Skip this step if you’re importing an existing repository.</p>

                <div class="form-checkbox unchecked mt-0 mb-3">
                    <label>
                        <input type="checkbox" />
                    Add a README file
                    </label>
                    <span class="note">
                        This is where you can write a long description for your project.
                        <a> Learn more.</a>
                    </span>
                </div>

                <div class="form-checkbox unchecked mt-0 mb-3">
                    <label>
                        <input type="checkbox" />
                    Add .gitignore
                    </label>
                    <span class="note">
                        Choose which files not to track from a list of templates.
                        <a> Learn more.</a>
                    </span>
                </div>

                <div class="form-checkbox unchecked mt-0 mb-3">
                    <label>
                        <input type="checkbox" />
                    Choose a license
                    </label>
                    <span class="note">
                    A license tells others what they can and can't do with your code.
                        <a> Learn more.</a>
                    </span>
                </div>

                <hr aria-hidden="true"></hr>
            </div>
        )
    }
}