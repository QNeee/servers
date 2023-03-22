
import { useLocation } from "react-router-dom";
import { AddServer } from "../AddServer/AddServer";
import { UserServers } from "../UserServers/UserServers";
import { Button, ButtonContainer } from "./Home.styled";


export const Home: React.FC = () => {
    const { pathname } = useLocation();
    return <div>
        {pathname === '/home' && <ButtonContainer>
            <Button to='messages'>messages</Button>
            <Button to='your-servers'>your servers</Button>
            <Button to='add'>add server</Button>
        </ButtonContainer>}
        {pathname === '/home/add' && <AddServer />}
        {pathname === '/home/your-servers' && <UserServers />}
        <div>
            The best Servers
            <div>

            </div>
        </div>
    </div>
}