import { Conteiner, Name, Tag, Location, Avatar, Stats,StatsList, Label, Quantity } from "./Profile.styled";
import {  } from "./user";
export const Profile = ({userName,tag,location,avatar,stats}) => {
    return (
        <Conteiner>
            <Conteiner>
                <Avatar alt='User avatar' src={avatar} size='80px'></Avatar>
                <Name>{userName}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Conteiner>
            <Stats>
                <StatsList>
                    <Label>followers</Label>
                    <Quantity>{stats.followers}</Quantity>
                </StatsList>
                <StatsList><Label>views</Label>
                    <Quantity>{stats.views}</Quantity>
                </StatsList>
                <StatsList><Label>likes</Label>
                    <Quantity>{stats.likes}</Quantity>
                </StatsList>
            </Stats>
        </Conteiner>
    )
}



