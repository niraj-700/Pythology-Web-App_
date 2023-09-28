import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

function ReportEntryfrom() {

    const bloodTestList = [
        { id: 1, name: 'HEMOGLOBIN', normalVal: '12-16 gm/dl', values:'hemoglobin'},
        { id: 2, name: 'WBC/COUNT(TLC)', normalVal: '4000-10000/cmm' },
        { id: 3, name: 'RBC/COUNT', normalVal: '3.5-5.6 mill/cmm' },
        { id: 4, name: 'HCT', normalVal: '35-54 %' },
        { id: 5, name: 'MCV', normalVal: '79-101 %' },
        { id: 6, name: 'MCH', normalVal: '26-36 %' },
        { id: 7, name: 'MCHC', normalVal: '31-37 %' },

    ];

    const [bloodTestNames, setBloodTestNames] = useState(bloodTestList);

    const handleBloodTestChange = (id, values) => {
        const updatedSubjects = bloodTestNames.map((test) =>
            test.id === id ? { ...test, values: values } : test
        );
        setBloodTestNames(updatedSubjects);
    };

    const urineTestList = [
        { id: 1, name: 'Quantity' },
        { id: 2, name: 'Color' },
        { id: 3, name: 'Appearance' },
        { id: 4, name: 'Sediment' },
        { id: 5, name: 'Specific Gravity' },
        { id: 6, name: 'Reaction (to litmus)' },
        { id: 7, name: 'Albumin' },
        { id: 8, name: 'Sugar' },
        { id: 9, name: 'Plus Cell' },
        { id: 10, name: 'Epithelial Cell' },

    ];

    const [urineTestNames, setUrineTestNames] = useState(urineTestList);

    const handleUrineTestChanges = (id, values) => {
        const updatedSubjects = urineTestNames.map((test) =>
            test.id === id ? { ...test, values: values } : test
        );
        setUrineTestNames(updatedSubjects);
    };

    const [user, setUser] = useState({
        patientName:"",
        age:"",
        doctorName:"",
        date:"",
        HEMOGLOBIN:"",
    })

    const handleChange = e => {
        const{name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <>
                <section className="reportentry">
                {/* {console.log("User", user)} */}
                    <section className="patientdetail">
                        <h2>Patient Details</h2>
                        <Form>
                            <Row className="align-items-center">
                                <Col>
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>PatientName</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>Patient Name</InputGroup.Text>
                                        <Form.Control id="inlineFormInputGroup" name="patientName" value={user.patientName} onChange={handleChange} placeholder="Enter the patient name" />
                                    </InputGroup>
                                </Col>
                                <Col xs='4'>
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>Age</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>Age</InputGroup.Text>
                                        <Form.Control id="inlineFormInputGroup" type="number" name="age" value={user.age} onChange={handleChange} placeholder="Enter the age" />
                                    </InputGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>DoctorName</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>Ref. by Dr.</InputGroup.Text>
                                        <Form.Control id="inlineFormInputGroup" name="doctorName" value={user.doctorName} onChange={handleChange} placeholder="Enter the doctor name" />
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>Date</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>Date</InputGroup.Text>
                                        <Form.Control type="date" name="date" value={user.date} onChange={handleChange} placeholder="Enter the date" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Form>
                    </section>
                    <section className="testdetail">
                        <h2>Test Details</h2>
                        <Tabs
                            defaultActiveKey="bloodtest"
                            id="fill-tab-example"
                            className="mb-3"
                            fill
                        >
                            <Tab eventKey="bloodtest" title="Blood Test">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Test Name</th>
                                            <th>Value</th>
                                            <th>Normal Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bloodTestNames.map((test) => (
                                            <tr key={test.id}>
                                                <td>{test.name}</td>
                                                <td>
                                                    <input
                                                        type="number" name={test.name}
                                                        value={test.values || ''}
                                                        onChange={(e) => handleBloodTestChange(test.name, e.target.value)}
                                                    />
                                                </td>
                                                <td>{test.normalVal}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                            </Tab>
                            <Tab eventKey="urinetest" title="Urine Test">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Test Name</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {urineTestNames.map((test) => (
                                            <tr key={test.id}>
                                                <td>{test.name}</td>
                                                <td>
                                                    <input
                                                        type="text" name={''}
                                                        value={test.values || ''}
                                                        onChange={(e) => handleUrineTestChanges(test.id, e.target.value)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                    </section>
                    <Button variant="dark" type="submit">Submit</Button>
                </section>
        </>
    )
}
export default ReportEntryfrom;