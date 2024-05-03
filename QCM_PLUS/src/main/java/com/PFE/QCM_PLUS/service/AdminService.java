package com.PFE.QCM_PLUS.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PFE.QCM_PLUS.entity.Admin;
import com.PFE.QCM_PLUS.entity.Questionnaire;
import com.PFE.QCM_PLUS.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Optional<Admin> getAdminById(int adminId) {
        return adminRepository.findById(adminId);
    }

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public List<Questionnaire> getQuestionnairesByAdminId(int adminId) {
        Optional<Admin> adminOptional = adminRepository.findById(adminId);
        if (adminOptional.isPresent()) {
            return adminOptional.get().getQuestionnaires();
        } else {
            return null; // You may choose to handle this differently, such as throwing an exception
        }
    }
}
