// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase('./database.csv');
      const fields = {};

      for (const student of students) {
        const { field, firstname } = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      res.status(200).send(`This is the list of our students\n${Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map(
          (field) =>
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
        )
        .join('\n')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase('./database.csv');
      const filteredStudents = students
        .filter((student) => student.field === major)
        .map((student) => student.firstname);

      res.status(200).send(`List: ${filteredStudents.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
