package com.ecommerce.project.repository;

import com.ecommerce.project.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CartRepository extends JpaRepository<Cart, Long> {
    @Query("SELECT c FROM Cart c WHERE c.user.email = ?1")
    Cart findCartByEmail(String email);
}

// c is the object that we are retrieving from the cart
//?1 -->> it indicate we are (((String email))) passing as a first parameter