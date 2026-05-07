package com.unicalc.controller;

import com.unicalc.model.Subject;
import com.unicalc.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/curriculum")
@CrossOrigin(origins = "http://localhost:5173")
public class SubjectController {

    @Autowired
    private SubjectRepository subjectRepository;

    @GetMapping("/subjects")
    public List<Subject> getSubjects(
            @RequestParam String schema,
            @RequestParam(required = false) String group,
            @RequestParam(required = false) String branch,
            @RequestParam Integer semester) {
        
        if (semester <= 2 && group != null) {
            return subjectRepository.findBySchemaTypeAndAcademicGroupAndSemester(schema, group, semester);
        } else if (branch != null) {
            return subjectRepository.findBySchemaTypeAndBranchAndSemester(schema, branch, semester);
        }
        return List.of();
    }

    @GetMapping("/branches")
    public List<String> getBranches(@RequestParam String schema) {
        // Simple distinct query for branches
        return List.of("CE", "ME", "EE", "CSE", "ECE", "ChE", "IE", "IPE", "ETE", "PEI", "EEE");
    }
}
