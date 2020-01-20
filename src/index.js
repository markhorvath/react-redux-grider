//Imprt React and react-dom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


//create react component
const App = () => {

    return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
                imgSrc={faker.image.avatar()}
                author={faker.name.firstName()}
                date={faker.date.month()}
                text={faker.lorem.sentence()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                imgSrc={faker.image.avatar()}
                author={faker.name.firstName()}
                date={faker.date.month()}
                text={faker.lorem.sentence()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                imgSrc={faker.image.avatar()}
                author={faker.name.firstName()}
                date={faker.date.month()}
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