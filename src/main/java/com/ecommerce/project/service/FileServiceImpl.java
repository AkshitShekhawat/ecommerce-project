package com.ecommerce.project.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class FileServiceImpl implements FileService{

    @Override
    public String uploadImage(String path, MultipartFile file) throws IOException {
        // File names of current / original file
        String originalFileName = file.getOriginalFilename();

        // Check for null or missing extension // Add this safety check
        if (originalFileName == null || !originalFileName.contains(".")) {
            throw new IllegalArgumentException("Invalid file: no extension found in " + originalFileName);
        }

        // Generate a unique file name
        String randomId = UUID.randomUUID().toString();
        // mat.jpg --> 1234 --> 1234.jpg
        String fileName = randomId.concat(originalFileName.substring(originalFileName.lastIndexOf('.')));
        String filePath = path + File.separator + fileName;

        // Check if path exist and create , Ensure path exists
        File folder = new File(path);
        if (!folder.exists())
            folder.mkdir();

        // Upload file to server
        Files.copy(file.getInputStream(), Paths.get(filePath));

        // Return stored file name
        return fileName;
    }
}
