import MacroPage from '../pages/MacroPage';

describe('MacroDroid Automation', () => {
    it('should add a macro successfully', async () => {
        await MacroPage.addMacro();
    });
});
