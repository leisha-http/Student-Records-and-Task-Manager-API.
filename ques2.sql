-- student_portal.sql
-- Create database
CREATE DATABASE StudentPortal;
-- Use database
USE StudentPortal;
-- Create tables
CREATE TABLE Students (
 StudentID INT AUTO_INCREMENT,
 FirstName VARCHAR(255) NOT NULL,
 LastName VARCHAR(255) NOT NULL,
 Email VARCHAR(255) UNIQUE NOT NULL,
 PRIMARY KEY (StudentID)
);
CREATE TABLE Courses (
 CourseID INT AUTO_INCREMENT,
 CourseName VARCHAR(255) NOT NULL,
 Description TEXT,
 PRIMARY KEY (CourseID)
);
CREATE TABLE Enrollments (
 EnrollmentID INT AUTO_INCREMENT,
 StudentID INT NOT NULL,
 CourseID INT NOT NULL,
 EnrollmentDate DATE NOT NULL,
 PRIMARY KEY (EnrollmentID),
 FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
 FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);
