// "data": [
//     {
//         "id": 1,
//         "project": "big project",
//         "metadata": [],
//         "expenses": [
//             {
//                 "title": "expense 1",
//                 "price": 100,
//                 "isQualified": false
//             },
//             {
//                 "title": "bills",
//                 "price": 80,
//                 "isQualified": true
//             }
//         ]
//     },
export interface IProjectsData {
    projects: Array<IProject>;
}


export interface IProject {
    id: number;
    project: string;
    metaData: Array<string>;
    expenses: Array<IExpenses>;
}

export interface IExpenses {
    title: string;
    price: number;
    isQualified: boolean;
}
