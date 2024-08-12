using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace CrudAPI.Models.Context;

public partial class ApplicationDbContext : DbContext
{
    public ApplicationDbContext()
    {
    }

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BlogPost> BlogPosts { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    { }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BlogPost>(entity =>
        {
            entity.HasKey(e => e.BlogId).HasName("PK__BlogPost__54379E30B5D62C4A");

            entity.ToTable("BlogPost");

            entity.Property(e => e.Content)
                .HasMaxLength(300)
                .IsUnicode(false);
            entity.Property(e => e.Description)
                .HasMaxLength(300)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__Category__19093A0B598E28FF");

            entity.ToTable("Category");

            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Employee__3214EC07900B7A13");

            entity.ToTable("Employee");

            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Phone)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Salary).HasColumnType("decimal(20, 2)");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
