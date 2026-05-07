package com.unicalc.repository;

import com.unicalc.model.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface SubjectRepository extends JpaRepository<Subject, Long> {
    List<Subject> findBySchemaTypeAndAcademicGroupAndSemester(String schemaType, String academicGroup, Integer semester);
    List<Subject> findBySchemaTypeAndBranchAndSemester(String schemaType, String branch, Integer semester);
}
