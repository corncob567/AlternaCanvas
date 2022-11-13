import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const ZoomMeetingTable = (props) => {
    const meetings = props.zoomMeetingInfo;
    if(meetings.length === 0){
        return(
            <div className='noContentFound'>
                No Zoom meetings have been scheduled for this course.
            </div>
        )
    }
    return (
        <Table striped className='zoomMeetingTable'>
        <thead>
            <tr>
                <th>Start Time</th>
                <th>Topic</th>
                <th>Meeting ID</th>
            </tr>
        </thead>
        <tbody>
            {meetings.map((meeting, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <div>
                            {meeting.startDate}<br/>
                            {meeting.startTime}
                            </div>
                        </td>
                        <td>{meeting.topic}</td>
                        <td>{meeting.meetingId}</td>
                        <td>
                            <Button variant="outline-primary">Join</Button>{' '}
                            <Button variant="outline-primary">Invitation</Button>{' '}
                        </td>
                    </tr>
                );
            })}
        </tbody>
        </Table>
    );
}

export default ZoomMeetingTable;