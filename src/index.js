//Imprt React and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


//create react component
const App = () => {
    function createDate() {
        //use faker to generate a random Datetime object in the past
        let date = faker.date.past();
        var d = date.getDate();
        var m = date.getMonth() + 1;
        //convert datetime object to string
        var dateStr = m + "/" + d + "/" + date.getFullYear();
        console.log(dateStr);
        return dateStr;
    }
    createDate();
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
                imgSrc={faker.image.avatar()}
                author={faker.name.firstName()}
                date={createDate()}
                text={faker.lorem.sentence()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                imgSrc={faker.image.avatar()}
                author={faker.name.firstName()}
                date={createDate()}
                text={faker.lorem.sentence()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                imgSrc={faker.image.avatar()}
                author={faker.name.firstName()}
                date={createDate()}
                text={faker.lorem.sentence()}/>
        </ApprovalCard>
    </div>
    );
}


//take the react component and display it
ReactDOM.render(
    <App />,
    document.getElementById('root')
);