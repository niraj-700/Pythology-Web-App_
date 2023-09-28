import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function BloodTest() {
    const bloodTestList = [
        { id: 1, name: 'HEMOGLOBIN', normalVal: '12-16 gm/dl' },
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

    return (
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
                                type="number"
                                value={user.test.values || ''}
                                onChange={(e) => handleBloodTestChange(test.id, e.target.value)}
                            />
                        </td>
                        <td>{test.normalVal}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default BloodTest;
