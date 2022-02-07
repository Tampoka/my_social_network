import Paginator from "./Paginator";
import {create} from "react-test-renderer";

describe("Paginator component test", () => {
    test("pages count is 11 but should be displayed only 10", () => {
        // @ts-ignore
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root
        let spans = root.findAllByType("span")
        expect(spans.length).toBe(10)
    })
    test("if pages count is more than 10, NEXT button should be displayed", () => {
        // @ts-ignore
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root
        let button = root.findAllByType("button")
        expect(button.length).toBe(1)
    })
})