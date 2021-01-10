import React, { Component } from 'react';
import './RepoName.css';
import '../../App.css';

export default class RepoName extends Component {
    render(){
        return (
            <div className="container-md">
                <div className="container-md container-row">
                    <dl className='form-group float-left required mt-1'>
                        <dt class="form-group-header">
                            <label id="repository-owner-label" for="repository-owner">Owner</label>
                        </dt>

                        <dd class="form-group-body">
                            <details class="position-relative details-reset details-overlay select-menu">
                                <summary id="repository-owner" class="btn select-menu-button with-gravatar js-owner-select" data-menu-button="" aria-describedby="repository-owner-label" aria-haspopup="menu" role="button">
                                    <img alt="@respecu" src="https://avatars2.githubusercontent.com/u/35756930?s=60&amp;v=4" class="avatar avatar-user mr-1" width="20" height="20" />
                                    respecu
                                </summary>
                            </details>
                        </dd>
                    </dl>
                    <span class="float-left pt-4 mx-2 f2 js-with-permission-fields mt-1">/</span>
                    <div class="d-block d-sm-none mb-2 clearfix"></div>

                    <dl class="form-group mt-1 float-left js-with-permission-fields required">
                        <dt class="input-label">
                            <label autocapitalize="none" maxlength="100" required="required" aria-describedby="repo-name-suggestion" for="repository_name">Repository name
                            </label>
                        </dt>
                        <dd>
                            <input autocapitalize="none" maxlength="100" class="form-control js-repo-name js-repo-name-auto-check short" required="" size="100" type="text" name="repository[name]" id="repository_name" autocomplete="off" spellcheck="false" />
                        </dd>
                    </dl>
                </div>

                <p class="my-2" id="repo-name-suggestion">
                    Great repository names are short and memorable. Need inspiration? How about
                    <strong class="reponame-suggestion js-reponame-suggestion"> cuddly-waddle</strong>?
                </p>

                <dl class="form-group">
                    <dt class="input-label">
                        <label autocomplete="off" for="repository_description">Description 
                            <span class="note">(optional)</span>
                        </label>
                    </dt>
                    <dd>
                        <input class="form-control long" autocomplete="off" type="text" name="repository[description]" id="repository_description" />
                    </dd>
                </dl>

                <hr aria-hidden="true"></hr>
            </div>
        );
    }
}