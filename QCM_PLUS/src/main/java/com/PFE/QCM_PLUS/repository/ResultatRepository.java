package com.PFE.QCM_PLUS.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PFE.QCM_PLUS.entity.Resultat;





@Repository
public interface ResultatRepository extends JpaRepository<Resultat, Long> {
    Optional<Resultat> findById(int resultatId);
}