import Card from './Card';

const CardList = (props) => {
    // const testData = [
    //     {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    //     {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    //       {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
    //     ];
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
            {/* <Card {...testData[0]}/>
            <Card {...testData[1]}/>
            <Card {...testData[2]}/> */}
        </div>
    )
}

export default CardList;