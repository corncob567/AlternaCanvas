import React from 'react';
import '../../../styles/main.scss';
import zoomLogo from '../../../assets/zoomlogo.png';
import ZoomMeetingTable from './zoommeetingtable';

const courseZoomMeetings = [
    {
        startDate: 'Mon, Nov 14 (Recurring)',
        startTime: '1:00 PM',
        topic: '(22FS-Full) USER INTERFACE I (001)',
        meetingId: '967 4546 9780',
        courseId: "ui"
    },
    {
        startDate: 'Wed, Nov 16 (Recurring)',
        startTime: '1:00 PM',
        topic: '(22FS-Full) USER INTERFACE I (001)',
        meetingId: '967 4546 9780',
        courseId: "ui"
    },
    {
        startDate: 'Fri, Nov 18 (Recurring)',
        startTime: '1:00 PM',
        topic: '(22FS-Full) USER INTERFACE I (001)',
        meetingId: '967 4546 9780',
        courseId: "ui"
    },
    {
        startDate: 'Mon, Nov 21 (Recurring)',
        startTime: '1:00 PM',
        topic: '(22FS-Full) USER INTERFACE I (001)',
        meetingId: '967 4546 9780',
        courseId: "ui"
    },
    {
        startDate: 'Wed, Nov 23 (Recurring)',
        startTime: '1:00 PM',
        topic: '(22FS-Full) USER INTERFACE I (001)',
        meetingId: '967 4546 9780',
        courseId: "ui"
    },
    {
        startDate: 'Fri, Nov 25 (Recurring)',
        startTime: '1:00 PM',
        topic: '(22FS-Full) USER INTERFACE I (001)',
        meetingId: '967 4546 9780',
        courseId: "ui"
    },
    {
        startDate: 'Mon, Nov 28 (Recurring)',
        startTime: '1:00 PM',
        topic: '(22FS-Full) USER INTERFACE I (001)',
        meetingId: '967 4546 9780',
        courseId: "ui"
    },
    {
        startDate: 'Wed, Nov 30 (Recurring)',
        startTime: '1:00 PM',
        topic: '(22FS-Full) USER INTERFACE I (001)',
        meetingId: '967 4546 9780',
        courseId: "ui"
    },
    {
        startDate: 'Mon, Nov 14 (Recurring)',
        startTime: '3:30 PM',
        topic: '(22FS-Full) COMPUTER GRAPHICS (001)',
        meetingId: '684 1337 8004',
        courseId: "compg"
    },
    {
        startDate: 'Wed, Nov 16 (Recurring)',
        startTime: '3:30 PM',
        topic: '(22FS-Full) COMPUTER GRAPHICS (001)',
        meetingId: '684 1337 8004',
        courseId: "compg"
    },
    {
        startDate: 'Fri, Nov 18 (Recurring)',
        startTime: '3:30 PM',
        topic: '(22FS-Full) COMPUTER GRAPHICS (001)',
        meetingId: '684 1337 8004',
        courseId: "compg"
    },
    {
        startDate: 'Mon, Nov 21 (Recurring)',
        startTime: '3:30 PM',
        topic: '(22FS-Full) COMPUTER GRAPHICS (001)',
        meetingId: '684 1337 8004',
        courseId: "compg"
    },
    {
        startDate: 'Wed, Nov 23 (Recurring)',
        startTime: '3:30 PM',
        topic: '(22FS-Full) COMPUTER GRAPHICS (001)',
        meetingId: '684 1337 8004',
        courseId: "compg"
    },
    {
        startDate: 'Fri, Nov 25 (Recurring)',
        startTime: '3:30 PM',
        topic: '(22FS-Full) COMPUTER GRAPHICS (001)',
        meetingId: '684 1337 8004',
        courseId: "compg"
    },
    {
        startDate: 'Mon, Nov 28 (Recurring)',
        startTime: '3:30 PM',
        topic: '(22FS-Full) COMPUTER GRAPHICS (001)',
        meetingId: '684 1337 8004',
        courseId: "compg"
    },
    {
        startDate: 'Wed, Nov 30 (Recurring)',
        startTime: '3:30 PM',
        topic: '(22FS-Full) COMPUTER GRAPHICS (001)',
        meetingId: '684 1337 8004',
        courseId: "compg"
    },
];

const Zoom = (props) => {
    const courseId = props.courseId
    var zoomMeetingInfo = courseZoomMeetings.filter(function(meetingInfo){
        return meetingInfo.courseId === courseId;
    });
    return (
        <div className='pageWrapper'>
            <h1 className='pageTitle'>
                <img src={zoomLogo} alt="Zoom Logo" style={{width: '150px'}}/>
            </h1>
            <ZoomMeetingTable zoomMeetingInfo={zoomMeetingInfo}/>
        </div>
    );
};

export default Zoom;