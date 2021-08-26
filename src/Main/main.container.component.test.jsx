import { fireEvent, render } from "@testing-library/react";
import MainContainerComponent from "./main.container.component";
import fixtures from "./main.container.component.fixtures";
const getQueryElements = ()=>{
    const mainContainerEle = render(<MainContainerComponent />)
    const numPplEle =  mainContainerEle.getByLabelText("Number of People", {selector: 'input'});
    const resetBtn = mainContainerEle.getByText("RESET", {selector: "button"});
    const billEle = mainContainerEle.getByLabelText("Bill", {selector: 'input'});
    const ttlTipEle = mainContainerEle.getByTestId("subtotal-amount-tip");
    const ttlBillEle = mainContainerEle.getByTestId("subtotal-amount-bill");
    const customTipEle = mainContainerEle.getByTestId("custom-tip");
    return {mainContainerEle, numPplEle, resetBtn, billEle, ttlBillEle, ttlTipEle, customTipEle};
}
test('Check Input Fields: Bill, Number of People, Reset',()=>{
    const {mainContainerEle, resetBtn, billEle, numPplEle} = getQueryElements();
    [5,10,15,20,25].map((i)=>{
        return mainContainerEle.getByText(i + "%", {selector: "button"});
    })
    expect(billEle.value).toBe("");
    expect(numPplEle.value).toBe("");
    expect(resetBtn).toBeDisabled();
})

test("Reset button to be enabled on bill input", ()=>{
    const {resetBtn, billEle} = getQueryElements();
    fireEvent.change(billEle, {target:{value: '23'}});
    expect(billEle.value).not.toBe("");
    expect(resetBtn).toBeEnabled();
});

test("Reset button to be enabled on Number of People input", ()=>{
    const {resetBtn, numPplEle} = getQueryElements();
    fireEvent.change(numPplEle, {target:{value: '23'}})
    expect(numPplEle.value).not.toBe("");
    expect(resetBtn).toBeEnabled();
});


test("Reset button click", ()=>{
    const { numPplEle, resetBtn, billEle, ttlBillEle, ttlTipEle, customTipEle} = getQueryElements();
    fireEvent.change(numPplEle, {target:{value: '23'}});
    expect(numPplEle.value).not.toBe("");
    fireEvent.change(billEle, {target:{value: '23'}});
    fireEvent.change(customTipEle, {target:{value: '23'}})
    expect(billEle.value).not.toBe("");
    expect(customTipEle.value).not.toBe("");
    expect(ttlBillEle.textContent).not.toBe("$0.00");
    expect(ttlTipEle.textContent).not.toBe("$0.00");
    expect(resetBtn).toBeEnabled();
    fireEvent.click(resetBtn);
    expect(billEle.value).toBe("");
    expect(numPplEle.value).toBe("");
    expect(customTipEle.value).toBe("");
    expect(ttlBillEle.textContent).toBe("$0.00");
    expect(ttlTipEle.textContent).toBe("$0.00");
});


test("Tip: Custom amount", ()=>{
    const testFixture = fixtures.customTip;
    const { numPplEle, resetBtn, billEle, ttlBillEle, ttlTipEle, customTipEle} = getQueryElements();
    fireEvent.change(numPplEle, {target:{value: testFixture.people }});
    expect(numPplEle.value).not.toBe("");
    fireEvent.change(billEle, {target:{value: testFixture.bill}});
    fireEvent.change(customTipEle, {target:{value: testFixture.tip}})
    expect(ttlBillEle.textContent).toBe(`${testFixture.total}`);
    expect(ttlTipEle.textContent).toBe(`${testFixture.tip_amt}`);
});

test("Tip: Five Percent", ()=>{
    const testFixture = fixtures.fivePercent;
    const { mainContainerEle, numPplEle, resetBtn, billEle, ttlBillEle, ttlTipEle,} = getQueryElements();
    const tipBtn = mainContainerEle.getByText(testFixture.tip + "%", {selector: "button"});
    fireEvent.change(numPplEle, {target:{value: testFixture.people }});
    expect(numPplEle.value).not.toBe("");
    fireEvent.change(billEle, {target:{value: testFixture.bill}});
    fireEvent.click(tipBtn);
    expect(ttlBillEle.textContent).toBe(`${testFixture.total}`);
    expect(ttlTipEle.textContent).toBe(`${testFixture.tip_amt}`);
});

test("Tip: Ten Percent", ()=>{
    const testFixture = fixtures.tenPercent;
    const { mainContainerEle, numPplEle, resetBtn, billEle, ttlBillEle, ttlTipEle,} = getQueryElements();
    const tipBtn = mainContainerEle.getByText(testFixture.tip + "%", {selector: "button"});
    fireEvent.change(numPplEle, {target:{value: testFixture.people }});
    expect(numPplEle.value).not.toBe("");
    fireEvent.change(billEle, {target:{value: testFixture.bill}});
    fireEvent.click(tipBtn);
    expect(ttlBillEle.textContent).toBe(`${testFixture.total}`);
    expect(ttlTipEle.textContent).toBe(`${testFixture.tip_amt}`);
});

test("Tip: Fifteen Percent", ()=>{
    const testFixture = fixtures.fifteenPercent;
    const { mainContainerEle, numPplEle, resetBtn, billEle, ttlBillEle, ttlTipEle,} = getQueryElements();
    const tipBtn = mainContainerEle.getByText(testFixture.tip + "%", {selector: "button"});
    fireEvent.change(numPplEle, {target:{value: testFixture.people }});
    expect(numPplEle.value).not.toBe("");
    fireEvent.change(billEle, {target:{value: testFixture.bill}});
    fireEvent.click(tipBtn);
    expect(ttlBillEle.textContent).toBe(`${testFixture.total}`);
    expect(ttlTipEle.textContent).toBe(`${testFixture.tip_amt}`);
});