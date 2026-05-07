package com.unicalc.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "subjects")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String subjectCode;

    @Column(nullable = false)
    private String schemaType; // NEP, OLD

    private String academicGroup; // GROUP_A, GROUP_B (for 1st year)
    
    private String branch; // CSE, ME, etc.
    
    @Column(nullable = false)
    private Integer semester;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double credits;

    private String electiveCategory; // e.g. "Program Elective-1", "Open Elective-2"
}
