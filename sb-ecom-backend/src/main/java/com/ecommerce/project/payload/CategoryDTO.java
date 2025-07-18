package com.ecommerce.project.payload;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO {
    @Schema(description = "Category ID for a particular category", example = "101")
    private Long categoryId;

    @Schema(description = "Category name for a category you wish to create", example = "iPhone 16")
    private String categoryName;
}
