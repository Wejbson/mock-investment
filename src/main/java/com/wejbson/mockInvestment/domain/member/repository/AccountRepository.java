package com.wejbson.mockInvestment.domain.member.repository;

import com.wejbson.mockInvestment.domain.member.domain.Member;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

@Repository
public class AccountRepository {

    @PersistenceContext
    private EntityManager em;

    public void save(Member member){
        em.persist(member);
    }

    public Member find(String id){
        return em.find(Member.class, id);
    }
}
