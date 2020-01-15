import {
  FormTypes,
  setVisible,
  setDisabled,
  setDisplayState
} from "./d365.form";

/**
 * @module "account.form.js"
 */

/**
 * Account Form On Load&
 *
 * {@link https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/clientapi-form-context}
 * @function formOnLoad
 * @param {{}} executionContext - defines the event context in which your code executes.
 * @return void
 */
export function formOnLoad(executionContext) {
  const formContext = executionContext.getFormContext(),
    formType = formContext.ui.getFormType();

  FormTypes(formType);
  setVisible(formContext, false, "telephone2", "telephone3");
  setDisabled(formContext, true, "telephone1");
  setDisplayState(formContext, true, "tabs1", "tabs2", "tabs3");
}
