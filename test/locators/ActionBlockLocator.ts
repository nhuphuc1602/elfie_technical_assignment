export const ActionBlockLocator = {
    actionBlockTitle: '//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/infoCardTitle" and @text="Action Blocks"]]',
    addActionBlockButton: '//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/fab"]',
    actionBlockName: '//android.widget.LinearLayout[@resource-id="com.arlosoft.macrodroid:id/actionBlockContainer"]//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/name"]',
    actionBlockDescription: '//android.widget.LinearLayout[@resource-id="com.arlosoft.macrodroid:id/actionBlockContainer"]//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/description"]',
    
    actionBlockNameInputField: '//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/actionBlockNameText"]',
    actionBlockDescriptionInputField: '//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/description"]',

    addInputVariableButton: '//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/addInputVariableButton"]',
    inputVarwithName: '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.arlosoft.macrodroid:id/inputVarsList"]//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name"]',
    inputVarwithValue: '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.arlosoft.macrodroid:id/inputVarsList"]//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_detail"]',
    inputVarCollapseButton: '//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/inputCollapseExpandButton"]',


    addActionButton: '//android.widget.ImageButton[@content-desc="Add Action"]',
    addActionLoggingButton: '//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/category_name" and @text="Logging"]',
    addActionLoggingClearLogButton: '//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/select_item_name" and @text="Clear Log"]',
    addActionLoggingSystemLogRadioButton: '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="System Log"]',
    selectOptionOKButton: '//android.widget.Button[@text="OK"]',
    actionwithName: '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.arlosoft.macrodroid:id/actionsList"]//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name"]',
    actionwithValue: '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.arlosoft.macrodroid:id/actionsList"]//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_detail"]',


    addOutputVariableButton: '//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/addOutputVariableButton"]',
    outputVarwithName: '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.arlosoft.macrodroid:id/outputVarsList"]//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_name"]',
    outputVarwithValue: '//androidx.recyclerview.widget.RecyclerView[@resource-id="com.arlosoft.macrodroid:id/outputVarsList"]//android.widget.TextView[@resource-id="com.arlosoft.macrodroid:id/macro_edit_entry_detail"]',
    outputVarCollapseButton: '//android.widget.ImageButton[@resource-id="com.arlosoft.macrodroid:id/outputCollapseExpandButton"]',



    createNewVarTitle: '//android.widget.TextView[@text="Create New Variable"]',
    newVarNameInputField: '//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/variable_new_variable_dialog_name"]',
    newVarTypeSelect: '//android.widget.Spinner[@resource-id="com.arlosoft.macrodroid:id/variable_new_variable_type_spinner"]',
    newVarStringSelect: '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="String"]',

    localVarTitle: '//android.widget.TextView[@text="Local Variable"]',
    localTrueRadioButton: '//android.widget.RadioButton[@resource-id="com.arlosoft.macrodroid:id/trueRadio"]',
    localVarInputField: '//android.widget.EditText[@resource-id="com.arlosoft.macrodroid:id/enter_variable_dialog_value"]',
    cancelButton: '//android.widget.Button[@resource-id="com.arlosoft.macrodroid:id/cancelButton"]',
    okButton: '//android.widget.Button[@resource-id="com.arlosoft.macrodroid:id/okButton"]',
    acceptButton: '//android.widget.ImageButton[@content-desc="Accept"]',

};

