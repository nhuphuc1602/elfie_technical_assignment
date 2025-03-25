import { Given, When, Then } from '@wdio/cucumber-framework';
import MacroPage from '../pages/MacroPage';

Given('I am on the Macro page', async function () {
    // Nếu cần thao tác mở app, có thể thêm setup bước này
});

When('I add a new macro', async function () {
    await MacroPage.addMacro();
});

Then('I should see the macro added successfully', async function () {
    // Kiểm tra nếu macro đã được thêm thành công
});
