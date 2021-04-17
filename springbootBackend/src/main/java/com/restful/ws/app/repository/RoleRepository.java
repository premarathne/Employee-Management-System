package com.restful.ws.app.repository;

import javax.management.relation.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restful.ws.app.model.ERole;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role,Integer> {
	Optional findByName(ERole name);
}
