import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserServers } from "../../Redux/serversOperations";
import { getUserId, getUserServers } from "../../Redux/serversSlice";
import { AppDispatch } from "../../Redux/store";
import { Container } from "../App.styled";
import { ServerDislikes, ServerImage, ServerLikes, ServerTitle, ServerRating, Server } from "./UserServers.styled";


export const UserServers: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const userServers = useSelector(getUserServers);
    const userId = useSelector(getUserId);
    useEffect(() => {
        if (userId)
            dispatch(getAllUserServers());
    }, [dispatch, userId]);
    return <Container>
        {userServers.length > 0 && userServers.map((item: { id: number, name: string, rates: string, date: Date, url: string, likes: number, disslikes: number }) =>
            <Server key={item.id}>
                <ServerTitle>{item.name}</ServerTitle>
                <ServerRating>{item.rates}</ServerRating>
                <ServerImage src={item.url} alt={item.url} />
                <ServerLikes>likes:{item.likes}</ServerLikes>
                <ServerDislikes>disslikes:{item.disslikes}</ServerDislikes>
            </Server>)
        }
    </Container >
}