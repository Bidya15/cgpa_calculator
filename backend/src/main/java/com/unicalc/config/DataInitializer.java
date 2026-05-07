package com.unicalc.config;

import com.unicalc.model.Subject;
import com.unicalc.repository.SubjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(SubjectRepository repository) {
        return args -> {
            if (repository.count() > 0) return;

            List<Subject> subjects = new ArrayList<>();

            // NEP FIRST YEAR - GROUP A
            addSubject(subjects, "PH181101", "NEP", "GROUP_A", null, 1, "Physics", 4.0, null);
            addSubject(subjects, "MA181102", "NEP", "GROUP_A", null, 1, "Mathematics - I", 4.0, null);
            addSubject(subjects, "EE181103", "NEP", "GROUP_A", null, 1, "Basic Electrical Engineering", 3.0, null);
            addSubject(subjects, "ME181104", "NEP", "GROUP_A", null, 1, "Engineering Graphics", 3.0, null);
            addSubject(subjects, "HS181105", "NEP", "GROUP_A", null, 1, "Technical Report Writing", 2.0, null);
            addSubject(subjects, "PH181111", "NEP", "GROUP_A", null, 1, "Physics Lab", 1.0, null);
            addSubject(subjects, "EE181113", "NEP", "GROUP_A", null, 1, "Basic Electrical Engineering Lab", 1.0, null);
            addSubject(subjects, "DT181106", "NEP", "GROUP_A", null, 1, "Design Thinking", 2.0, null);
            addSubject(subjects, "WS181107", "NEP", "GROUP_A", null, 1, "Digital fabrication/ Workshop", 1.0, null);

            addSubject(subjects, "CH181201", "NEP", "GROUP_A", null, 2, "Chemistry", 4.0, null);
            addSubject(subjects, "MA181202", "NEP", "GROUP_A", null, 2, "Mathematics-II", 4.0, null);
            addSubject(subjects, "BT181203", "NEP", "GROUP_A", null, 2, "Biology for Engineers", 3.0, null);
            addSubject(subjects, "CS181204", "NEP", "GROUP_A", null, 2, "Programming for problem solving", 3.0, null);
            addSubject(subjects, "ME181205", "NEP", "GROUP_A", null, 2, "Engineering Mechanics", 3.0, null);
            addSubject(subjects, "HV181206", "NEP", "GROUP_A", null, 2, "Universal Human Values", 3.0, null);
            addSubject(subjects, "CH181211", "NEP", "GROUP_A", null, 2, "Chemistry Lab", 1.0, null);

            // NEP CSE 7th Sem (Elective Example)
            addSubject(subjects, "CSE181701", "NEP", null, "CSE", 7, "Cloud Computing", 3.0, "Program Elective-1");
            addSubject(subjects, "CSE181702", "NEP", null, "CSE", 7, "Machine Learning", 3.0, "Program Elective-1");
            addSubject(subjects, "CSE181703", "NEP", null, "CSE", 7, "Big Data Analytics", 3.0, "Program Elective-1");
            
            addSubject(subjects, "OE181701", "NEP", null, "CSE", 7, "Cyber Law", 3.0, "Open Elective-1");
            addSubject(subjects, "OE181702", "NEP", null, "CSE", 7, "Entrepreneurship", 3.0, "Open Elective-1");

            addSubject(subjects, "CSE181704", "NEP", null, "CSE", 7, "Network Security", 3.0, null);
            addSubject(subjects, "CSE181705", "NEP", null, "CSE", 7, "Mobile App Development", 4.0, null);

            // NEP CSE 3rd & 4th Sem (From image codes)
            addSubject(subjects, "CSE181304", "NEP", null, "CSE", 3, "Data Structure and Algorithms", 3.0, null);
            addSubject(subjects, "CSE181302", "NEP", null, "CSE", 3, "Object Oriented Programming using C++", 3.0, null);
            addSubject(subjects, "CSE181305", "NEP", null, "CSE", 3, "Basics of Signals and Systems", 3.0, null);
            addSubject(subjects, "CSE181303", "NEP", null, "CSE", 3, "Digital Systems", 4.0, null);
            addSubject(subjects, "MA181301B", "NEP", null, "CSE", 3, "Mathematics III-B", 3.0, null);
            addSubject(subjects, "MC181306", "NEP", null, "CSE", 3, "Constitution of India", 0.0, null);
            addSubject(subjects, "CSE181314", "NEP", null, "CSE", 3, "Data Structure and Algorithms Lab", 2.0, null);
            addSubject(subjects, "CSE181312", "NEP", null, "CSE", 3, "Object Oriented Programming using C++ Lab", 2.0, null);
            addSubject(subjects, "SI181321", "NEP", null, "CSE", 3, "Internship-I(SAI -Social)", 1.0, null);

            repository.saveAll(subjects);
        };
    }

    private void addSubject(List<Subject> list, String code, String schema, String group, String branch, Integer sem, String name, Double credits, String electiveCat) {
        list.add(new Subject(null, code, schema, group, branch, sem, name, credits, electiveCat));
    }
}
