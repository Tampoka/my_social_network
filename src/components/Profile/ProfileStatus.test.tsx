import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import {updateStatus} from "../../redux/profile-reducer";

describe("ProfileStatusComponent", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"test text"}
                                                updateStatus={updateStatus}/>)
        const instance = component.root
        expect(instance.props.status).toBe("test text")
    })
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={"test text"}
                                                updateStatus={updateStatus}/>)
        const instance = component.root
        let span = instance.findByType("span")
        expect(span).not.toBeNull()
    })
    test("after creation <span> should be with correct status", () => {
        const component = create(<ProfileStatus status={"test text"}
                                                updateStatus={updateStatus}/>)
        const instance = component.root
        let span = instance.findByType("span")
        expect(span.props.children).toBe("test text")
    })
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={"test text"}
                                                updateStatus={updateStatus}/>)
        const instance = component.root
        expect(()=>{
            instance.findByType("input")
        }).toThrow()
    })
    test("onDoubleClick <input> should be displayed", () => {
        const component = create(<ProfileStatus status={"test text"}
                                                updateStatus={updateStatus}/>)
        const instance = component.root
        let span = instance.findByType("span")
        span.props.onDoubleClick()
        let input = instance.findByType("input")
        expect(input).not.toBeNull()
    })
    test("<input> should be with correct value", () => {
        const component = create(<ProfileStatus status={"test text"}
                                                updateStatus={updateStatus}/>)
        const instance = component.root
        let span = instance.findByType("span")
        span.props.onDoubleClick()
        let input = instance.findByType("input")
        expect(input.props.value).toBe("test text")
    })
})