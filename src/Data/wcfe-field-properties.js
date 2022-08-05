let defaultDisplayStyle = ['cssclass', 'input_class', 'title_class', 'show_in_email',  'show_in_email_customer', 'show_in_order', 'show_in_thank_you_page'];
let defaultPriceDetails = ['price_type' , 'price', 'taxable', 'tax_class'];
let defaultDisplayRules = ['rulesAction',  'ruleOperator', 'ruleOperandType', 'ruleOperand', 'rulesAction', 'ruleOperator', 'ruleOperandType', 'ruleOperand'];
let defaultRepeatRules = ['repeatFieldFor',  'nameSuffix', 'labelSuffix', 'rptInclParent'];

const FieldProperty = {
  tabPropetySet : {

    /* Basic Info */
    type : { id : 'type', type : 'text', name : 'type', label : 'Type', required : 'required', disabled : 'disabled'},
    name : { id : 'name', type : 'text', name : 'name', label : 'Name', required : 'required'},
    title : { id : 'title', type : 'text', name : 'title', label : 'Label'},
    description : { id : 'description', type : 'text', name : 'description', label : 'Description'},
    value : { id : 'value', type : 'text', name : 'value', label : 'Defualt Value'},
    placeholder : { id : 'placeholder', type : 'text', name : 'placeholder', label : 'Placeholder'},
    minlength : { id : 'minlength', type : 'text', name : 'minlength', label : 'Min. Length'},
    maxlength : { id : 'maxlength', type : 'text', name : 'maxlength', label : 'Max. Length'},
    validate : { id : 'validate', type : 'text', name : 'validate', label : 'Validation'},
    input_mask : { id : 'input_mask', type : 'text', name : 'input_mask', label : 'Input Masking Pattern'},
    required : { id : 'required', type : 'checkbox', label : 'Required'},
    enabled : { id : 'enabled', type : 'checkbox', label : 'Enabled'},
    order_meta : { id : 'order_meta', type : 'checkbox', label : 'Order Meta Data'},
    user_meta : { id : 'user_meta', type : 'checkbox', label : 'User Meta Data'},
    disableSelect2 : { id : 'disableSelect2', type : 'checkbox', label : 'Disable "Enhanced Select(Select2)"'},
    maxlength : { id : 'maxlength', type : 'text', name : 'maxlength', label : 'Max. Selections'},
    checkedDefault : { id : 'checkedDefault', type : 'checkbox', label : 'Checked by default'},

    /* Display Styles */
    cssclass : { id : 'cssclass', type : 'text', name : 'cssclass', label : 'Wrapper Class'},
    input_class : { id : 'input_class', type : 'text', name : 'input_class', label : 'Input Class'},
    title_class : { id : 'title_class', type : 'text', name : 'title_class', label : 'Label Class'},
    show_in_email : { id : 'show_in_email', type : 'checkbox', label : 'Display in Admin Emails'},
    show_in_email_customer : { id : 'show_in_email_customer', type : 'checkbox', label : 'Display in Customer Emails'},
    show_in_order : { id : 'show_in_order', type : 'checkbox', label : 'Display in Order Detail Pages'},
    show_in_thank_you_page : { id : 'show_in_thank_you_page', type : 'checkbox', label : 'Display in Thank You Page'},

    /* Price Details */
    price_type : { id : 'price_type', type : 'select', label : 'Price Type'},
    price : { id : 'price', type : 'text', name : '', label : 'Price'},
    taxable : { id : 'taxable', type : 'select', label : 'Taxable'},
    tax_class : { id : 'tax_class', type : 'select', label : 'Tax Class'},

    /* Display Rules */
    rulesAction : { id : 'rulesAction', type : 'select', label : 'Rules Action'},
    ruleOperator : { id : 'ruleOperator', type : 'select', label : 'Rule Operator'},
    ruleOperandType : { id : 'ruleOperandType', type : 'select', label : 'Rule Operand Type'},
    ruleOperand : { id : 'ruleOperand', type : 'select', label : 'Rule Operand'},
    rulesAction : { id : 'rulesAction', type : 'select', label : 'Rules Action'},
    ruleOperator : { id : 'ruleOperator', type : 'select', label : 'Rule Operator'},
    ruleOperandType : { id : 'ruleOperandType', type : 'select', label : 'Rule Operand Type'},
    ruleOperand : { id : 'ruleOperand', type : 'select', label : 'Rule Operand'},

    /* Repeat Rules */
    repeatFieldFor : { id : 'repeatFieldFor', type : 'select', label : 'Repeat Field For'},
    nameSuffix : { id : 'nameSuffix', type : 'select', label : 'Name Suffix'},
    labelSuffix : { id : 'labelSuffix', type : 'select', label : 'Label Suffix'},
    rptInclParent : { id : 'rptInclParent', type : 'checkbox', label : 'Repeat Include Parent'},
  },
  /* pripare Tab Setting. */
  setTabs : function(type){

    const basicInfo = 'basic-info-'+type
    const displayStyles = 'display-style-'+type
    const priceDetails = 'price-details-'+type
    const displayRules = 'display-rules-'+type
    const repeatRules = 'repeat-rules-'+type

    if ('text' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value', 'placeholder', 'minlength', 'maxlength', 'validate','input_mask', 'required', 'enabled', 'order_meta', 'user_meta']
    }else if ('hidden' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'value', 'validate', 'required', 'enabled', 'order_meta', 'user_meta']
    }else if ('password' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'placeholder', 'maxlength', 'validate', 'required', 'enabled', 'order_meta', 'user_meta']
    }else if ('tel' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'maxlength', 'validate', 'input_mask', 'required', 'enabled', 'order_meta', 'user_meta']
    }else if ('email' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value', 'placeholder', 'maxlength', 'validate', 'required', 'enabled', 'order_meta', 'user_meta']
    }else if ('number' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value', 'placeholder', 'validate', 'required', 'enabled', 'order_meta', 'user_meta']
    }else if ('textarea' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value', 'placeholder', 'maxlength', 'required', 'enabled', 'order_meta', 'user_meta']
    }else if ('select' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value', 'placeholder', 'required', 'enabled', 'order_meta', 'user_meta', 'disableSelect2']
      defaultPriceDetails = [ 'taxable', 'tax_class']
    }else if ('multiselect' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value', 'placeholder','maxlength', 'required', 'enabled', 'order_meta', 'user_meta', 'disableSelect2']
      defaultPriceDetails = [ 'taxable', 'tax_class']
    }else if ('radio' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value', 'required', 'enabled', 'order_meta', 'user_meta']
      defaultPriceDetails = [ 'taxable', 'tax_class']
    }else if ('checkbox' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value','checkedDefault', 'required', 'enabled', 'order_meta', 'user_meta']
    }else if ('checkboxgroup' == type) {
      var defaultBasicInfo = ['type', 'name', 'title', 'description', 'value', 'required', 'enabled', 'order_meta', 'user_meta']
      defaultPriceDetails = [ 'taxable', 'tax_class']
    }

    const tabs = {
      [basicInfo] : {
        id : basicInfo,
        tabPropetySetIds : defaultBasicInfo,
      },
      [displayStyles] : {
        id : displayStyles,
        tabPropetySetIds : defaultDisplayStyle,
      },
      [priceDetails] : {
        id : priceDetails,
        tabPropetySetIds : defaultPriceDetails,
      },
      [displayRules] : {
        id : displayRules,
        tabPropetySetIds : defaultDisplayRules,
      },
      [repeatRules] : {
        id : repeatRules,
        tabPropetySetIds : defaultRepeatRules
      }
    }

    return tabs;
  },

  setTabIds : function(type){
    const id = type+'Id';

    const basicInfo = 'basic-info-'+type
    const displayStyles = 'display-style-'+type
    const priceDetails = 'price-details-'+type
    const displayRules = 'display-rules-'+type
    const repeatRules = 'repeat-rules-'+type

    const fieldType = {
      id : id,
      fieldTabs : {
      	[basicInfo] : { id : basicInfo, label : 'Basic info', icon : 'dashicons-admin-generic'},
        [displayStyles] : { id : displayStyles, label : 'Display Style', icon : 'dashicons-art'},
        [priceDetails] : { id : priceDetails, label : 'Price Details', icon : 'dashicons-cart'},
        [displayRules] : { id : displayRules, label : 'Display Rules', icon : 'dashicons-filter'},
      	[repeatRules] : { id : repeatRules, label : 'Repeat Rules', icon : 'dashicons-controls-repeat'},
  	  },
      tabIds : [basicInfo, displayStyles, priceDetails, displayRules, repeatRules]
    }
    return fieldType;
  },
  allField : {

    /* all default fields in THWCFE. */
    text : { id : 'textId' },
    hidden : { id : 'hiddenId' },
    password : { id : 'passwordId' },
    tel : { id : 'telId' },
    email : { id : 'emailId' },
    number : { id : 'numberId' },
    textarea : { id : 'textareaId' },
    select : { id : 'selectId' },
    multiselect : { id : 'multiselectId' },
    radio : { id : 'radioId' },
    checkbox : { id : 'checkboxId' },
    checkboxgroup : { id : 'checkboxgroupId' }
  },
}

export default FieldProperty;
