import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function UrineTest() {
    const urineTestList = [
        { id: 1, name: 'Quantity'},
        { id: 2, name: 'Color'},
        { id: 3, name: 'Appearance'},
        { id: 4, name: 'Sediment'},
        { id: 5, name: 'Specific Gravity'},
        { id: 6, name: 'Reaction (to litmus)'},
        { id: 7, name: 'Albumin'},
        { id: 8, name: 'Sugar'},
        { id: 9, name: 'Plus Cell'},
        { id: 10, name: 'Epithelial Cell'},
        
    ];

    const [urineTestNames, setUrineTestNames] = useState(urineTestList);

    const handleUrineTestChanges = (id, values) => {
        const updatedSubjects = urineTestNames.map((test) =>
            test.id === id ? { ...test, values: values } : test
        );
        setUrineTestNames(updatedSubjects);
    };

    return (
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
                                type="text"
                                value={test.values || ''}
                                onChange={(e) => handleUrineTestChanges(test.id, e.target.value)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default UrineTest;
