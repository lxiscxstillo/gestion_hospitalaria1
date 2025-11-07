package com.hospital.management.model.template;

// Pattern: Prototype for diagnosis template cloning
public class DiagnosisTemplate implements Cloneable {
    private String id;
    private String name;
    private String content;

    public DiagnosisTemplate() {}

    public DiagnosisTemplate(String id, String name, String content) {
        this.id = id;
        this.name = name;
        this.content = content;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    @Override
    public DiagnosisTemplate clone() {
        try {
            return (DiagnosisTemplate) super.clone();
        } catch (CloneNotSupportedException e) {
            return new DiagnosisTemplate(this.id, this.name, this.content);
        }
    }
}

