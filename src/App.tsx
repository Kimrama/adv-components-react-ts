import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import Form from "./components/Form";
import { useRef } from "react";
export default function App() {
    function handleSave(data: unknown) {
        const extracteddata = data as { name: string; age: string };
        console.log(extracteddata);
    }
    return (
        <main>
            <Form onSave={handleSave}>
                <Input type="text" label="name" id="name" name="name"></Input>
                <Input type="number" label="age" id="age" name="age"></Input>
                <p>
                    <Button>Save</Button>
                </p>
            </Form>
        </main>
    );
}
