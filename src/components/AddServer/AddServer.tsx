import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postImage, postServer } from "../../Redux/serversOperations";
import { AppDispatch } from "../../Redux/store";
import { Button, Label, Input, Form } from "./AddServer.styled";


export const AddServer: React.FC = () => {
    const [form, setForm] = useState({ name: '', rates: '', date: '', file: {}, time: '' })
    const [file, setFile] = useState({});
    const dispatch: AppDispatch = useDispatch();
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    }
    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,

        }));
    }
    const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, rates, date, time } = form;
        if (!name || !rates || !date || !file || !time) return;
        await dispatch(postImage(file));
        dispatch(postServer(form));

    }
    return <Form onSubmit={onSubmit}>
        <Label>Name<Input type="text" name="name" value={form.name} onChange={inputHandler} /></Label>
        <Label>Rates<Input type="text" name="rates" value={form.rates} onChange={inputHandler} /></Label>
        <Label>Date<Input type="date" name="date" value={form.date} onChange={inputHandler} /></Label>
        <Label>Time<Input type="text" name="time" value={form.time} onChange={inputHandler} placeholder={'20:00'} /></Label>
        <Label>Image<Input type="file" name="file" onChange={handleImageChange} /></Label>
        <Button type="submit">Add Server</Button>
    </Form>
}