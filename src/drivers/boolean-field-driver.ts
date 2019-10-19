import { FieldDriver } from "../services/field-driver";
import { Activity, ActivityPropertyDescriptor, RenderResult } from "../models";

export class BooleanFieldDriver implements FieldDriver
{
  displayEditor = (activity: Activity, property: ActivityPropertyDescriptor): RenderResult => {
    const name = property.name;
    const label = property.label;

    return `<wf-boolean-field name="${name}" label="${label}" hint="${property.hint}"></wf-boolean-field>`;
  };

  updateEditor = (activity: Activity, property: ActivityPropertyDescriptor, formData: FormData) => {
    activity.state[property.name] = formData.get(property.name);
  };

}
