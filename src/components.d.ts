/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Activity,
  ActivityDefinition,
  ActivityDisplayMode,
  ImportedWorkflowData,
  Workflow,
  WorkflowFormatDescriptor,
  WorkflowFormatDescriptorDictionary,
} from './models';
import {
  SelectItem,
} from './components/field-editors/select-field/models';

export namespace Components {
  interface WfActivityEditor {
    'activity': Activity;
    'activityDefinitions': Array<ActivityDefinition>;
    'show': boolean;
  }
  interface WfActivityPicker {
    'activityDefinitions': Array<ActivityDefinition>;
    'hide': () => Promise<void>;
    'show': () => Promise<void>;
  }
  interface WfActivityRenderer {
    'activity': Activity;
    'activityDefinition': ActivityDefinition;
    'displayMode': ActivityDisplayMode;
    'updateEditor': (formData: FormData) => Promise<Activity>;
  }
  interface WfBooleanField {
    'hint': string;
    'label': string;
    'name': string;
    'value': string;
  }
  interface WfContextMenu {
    'handleContextMenuEvent': (e: MouseEvent) => Promise<void>;
    'target': HTMLElement | ShadowRoot;
    'targetSelector': string;
  }
  interface WfContextMenuItem {
    'text': any;
  }
  interface WfDesigner {
    'activityDefinitions': Array<ActivityDefinition>;
    'addActivity': (activityDefinition: ActivityDefinition) => Promise<void>;
    'canvasHeight': string;
    'getWorkflow': () => Promise<any>;
    'newWorkflow': () => Promise<void>;
    'updateActivity': (activity: Activity) => Promise<void>;
    'workflow': Workflow;
  }
  interface WfDesignerHost {
    'canvasHeight': string;
    'export': (formatDescriptor: WorkflowFormatDescriptor) => Promise<void>;
    'getWorkflow': () => Promise<any>;
    'import': () => Promise<void>;
    'newWorkflow': () => Promise<void>;
    'showActivityPicker': () => Promise<void>;
    'workflow': Workflow;
  }
  interface WfExportButton {
    'designerHostId': string;
    'workflowFormats': WorkflowFormatDescriptorDictionary;
  }
  interface WfExpressionField {
    'hint': string;
    'label': string;
    'multiline': boolean;
    'name': string;
    'syntax': string;
    'value': string;
  }
  interface WfImportExport {
    'export': (designer: HTMLWfDesignerElement, formatDescriptor: WorkflowFormatDescriptor) => Promise<void>;
    'import': (data?: ImportedWorkflowData) => Promise<void>;
  }
  interface WfListField {
    'hint': string;
    'items': string;
    'label': string;
    'name': string;
  }
  interface WfSelectField {
    'hint': string;
    'items': Array<SelectItem>;
    'label': string;
    'name': string;
    'value': string;
  }
  interface WfTextField {
    'hint': string;
    'label': string;
    'name': string;
    'value': string;
  }
}

declare global {


  interface HTMLWfActivityEditorElement extends Components.WfActivityEditor, HTMLStencilElement {}
  var HTMLWfActivityEditorElement: {
    prototype: HTMLWfActivityEditorElement;
    new (): HTMLWfActivityEditorElement;
  };

  interface HTMLWfActivityPickerElement extends Components.WfActivityPicker, HTMLStencilElement {}
  var HTMLWfActivityPickerElement: {
    prototype: HTMLWfActivityPickerElement;
    new (): HTMLWfActivityPickerElement;
  };

  interface HTMLWfActivityRendererElement extends Components.WfActivityRenderer, HTMLStencilElement {}
  var HTMLWfActivityRendererElement: {
    prototype: HTMLWfActivityRendererElement;
    new (): HTMLWfActivityRendererElement;
  };

  interface HTMLWfBooleanFieldElement extends Components.WfBooleanField, HTMLStencilElement {}
  var HTMLWfBooleanFieldElement: {
    prototype: HTMLWfBooleanFieldElement;
    new (): HTMLWfBooleanFieldElement;
  };

  interface HTMLWfContextMenuElement extends Components.WfContextMenu, HTMLStencilElement {}
  var HTMLWfContextMenuElement: {
    prototype: HTMLWfContextMenuElement;
    new (): HTMLWfContextMenuElement;
  };

  interface HTMLWfContextMenuItemElement extends Components.WfContextMenuItem, HTMLStencilElement {}
  var HTMLWfContextMenuItemElement: {
    prototype: HTMLWfContextMenuItemElement;
    new (): HTMLWfContextMenuItemElement;
  };

  interface HTMLWfDesignerElement extends Components.WfDesigner, HTMLStencilElement {}
  var HTMLWfDesignerElement: {
    prototype: HTMLWfDesignerElement;
    new (): HTMLWfDesignerElement;
  };

  interface HTMLWfDesignerHostElement extends Components.WfDesignerHost, HTMLStencilElement {}
  var HTMLWfDesignerHostElement: {
    prototype: HTMLWfDesignerHostElement;
    new (): HTMLWfDesignerHostElement;
  };

  interface HTMLWfExportButtonElement extends Components.WfExportButton, HTMLStencilElement {}
  var HTMLWfExportButtonElement: {
    prototype: HTMLWfExportButtonElement;
    new (): HTMLWfExportButtonElement;
  };

  interface HTMLWfExpressionFieldElement extends Components.WfExpressionField, HTMLStencilElement {}
  var HTMLWfExpressionFieldElement: {
    prototype: HTMLWfExpressionFieldElement;
    new (): HTMLWfExpressionFieldElement;
  };

  interface HTMLWfImportExportElement extends Components.WfImportExport, HTMLStencilElement {}
  var HTMLWfImportExportElement: {
    prototype: HTMLWfImportExportElement;
    new (): HTMLWfImportExportElement;
  };

  interface HTMLWfListFieldElement extends Components.WfListField, HTMLStencilElement {}
  var HTMLWfListFieldElement: {
    prototype: HTMLWfListFieldElement;
    new (): HTMLWfListFieldElement;
  };

  interface HTMLWfSelectFieldElement extends Components.WfSelectField, HTMLStencilElement {}
  var HTMLWfSelectFieldElement: {
    prototype: HTMLWfSelectFieldElement;
    new (): HTMLWfSelectFieldElement;
  };

  interface HTMLWfTextFieldElement extends Components.WfTextField, HTMLStencilElement {}
  var HTMLWfTextFieldElement: {
    prototype: HTMLWfTextFieldElement;
    new (): HTMLWfTextFieldElement;
  };
  interface HTMLElementTagNameMap {
    'wf-activity-editor': HTMLWfActivityEditorElement;
    'wf-activity-picker': HTMLWfActivityPickerElement;
    'wf-activity-renderer': HTMLWfActivityRendererElement;
    'wf-boolean-field': HTMLWfBooleanFieldElement;
    'wf-context-menu': HTMLWfContextMenuElement;
    'wf-context-menu-item': HTMLWfContextMenuItemElement;
    'wf-designer': HTMLWfDesignerElement;
    'wf-designer-host': HTMLWfDesignerHostElement;
    'wf-export-button': HTMLWfExportButtonElement;
    'wf-expression-field': HTMLWfExpressionFieldElement;
    'wf-import-export': HTMLWfImportExportElement;
    'wf-list-field': HTMLWfListFieldElement;
    'wf-select-field': HTMLWfSelectFieldElement;
    'wf-text-field': HTMLWfTextFieldElement;
  }
}

declare namespace LocalJSX {
  interface WfActivityEditor extends JSXBase.HTMLAttributes<HTMLWfActivityEditorElement> {
    'activity'?: Activity;
    'activityDefinitions'?: Array<ActivityDefinition>;
    'onUpdate-activity'?: (event: CustomEvent<any>) => void;
    'show'?: boolean;
  }
  interface WfActivityPicker extends JSXBase.HTMLAttributes<HTMLWfActivityPickerElement> {
    'activityDefinitions'?: Array<ActivityDefinition>;
    'onActivity-picked'?: (event: CustomEvent<any>) => void;
  }
  interface WfActivityRenderer extends JSXBase.HTMLAttributes<HTMLWfActivityRendererElement> {
    'activity'?: Activity;
    'activityDefinition'?: ActivityDefinition;
    'displayMode'?: ActivityDisplayMode;
  }
  interface WfBooleanField extends JSXBase.HTMLAttributes<HTMLWfBooleanFieldElement> {
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface WfContextMenu extends JSXBase.HTMLAttributes<HTMLWfContextMenuElement> {
    'onContext-menu'?: (event: CustomEvent<any>) => void;
    'target'?: HTMLElement | ShadowRoot;
    'targetSelector'?: string;
  }
  interface WfContextMenuItem extends JSXBase.HTMLAttributes<HTMLWfContextMenuItemElement> {
    'text'?: any;
  }
  interface WfDesigner extends JSXBase.HTMLAttributes<HTMLWfDesignerElement> {
    'activityDefinitions'?: Array<ActivityDefinition>;
    'canvasHeight'?: string;
    'onAdd-activity'?: (event: CustomEvent<any>) => void;
    'onEdit-activity'?: (event: CustomEvent<any>) => void;
    'onWorkflowChanged'?: (event: CustomEvent<any>) => void;
    'workflow'?: Workflow;
  }
  interface WfDesignerHost extends JSXBase.HTMLAttributes<HTMLWfDesignerHostElement> {
    'canvasHeight'?: string;
    'onWorkflowChanged'?: (event: CustomEvent<any>) => void;
    'workflow'?: Workflow;
  }
  interface WfExportButton extends JSXBase.HTMLAttributes<HTMLWfExportButtonElement> {
    'designerHostId'?: string;
    'onExport'?: (event: CustomEvent<any>) => void;
    'workflowFormats'?: WorkflowFormatDescriptorDictionary;
  }
  interface WfExpressionField extends JSXBase.HTMLAttributes<HTMLWfExpressionFieldElement> {
    'hint'?: string;
    'label'?: string;
    'multiline'?: boolean;
    'name'?: string;
    'syntax'?: string;
    'value'?: string;
  }
  interface WfImportExport extends JSXBase.HTMLAttributes<HTMLWfImportExportElement> {
    'onImport-workflow'?: (event: CustomEvent<Workflow>) => void;
  }
  interface WfListField extends JSXBase.HTMLAttributes<HTMLWfListFieldElement> {
    'hint'?: string;
    'items'?: string;
    'label'?: string;
    'name'?: string;
  }
  interface WfSelectField extends JSXBase.HTMLAttributes<HTMLWfSelectFieldElement> {
    'hint'?: string;
    'items'?: Array<SelectItem>;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }
  interface WfTextField extends JSXBase.HTMLAttributes<HTMLWfTextFieldElement> {
    'hint'?: string;
    'label'?: string;
    'name'?: string;
    'value'?: string;
  }

  interface IntrinsicElements {
    'wf-activity-editor': WfActivityEditor;
    'wf-activity-picker': WfActivityPicker;
    'wf-activity-renderer': WfActivityRenderer;
    'wf-boolean-field': WfBooleanField;
    'wf-context-menu': WfContextMenu;
    'wf-context-menu-item': WfContextMenuItem;
    'wf-designer': WfDesigner;
    'wf-designer-host': WfDesignerHost;
    'wf-export-button': WfExportButton;
    'wf-expression-field': WfExpressionField;
    'wf-import-export': WfImportExport;
    'wf-list-field': WfListField;
    'wf-select-field': WfSelectField;
    'wf-text-field': WfTextField;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


