-- Insert initial departments
INSERT INTO department (name) VALUES 
('Executive Management'),
('Marketing'),
('Production'),
('Engineering'),
('Artist Management'),
('Human Resources'),
('Legal'),
('A&R'),
('Operations'),
('IT Support'),
('Creative');

-- Insert initial roles
INSERT INTO role (title, salary, department_id) VALUES 
-- Executive Management
('Chief Executive Officer (CEO)', 150000, 1),
('Chief Financial Officer (CFO)', 130000, 1),
('Chief Operating Officer (COO)', 125000, 1),

-- Marketing
('Marketing Manager', 80000, 2),
('Social Media Specialist', 55000, 2),
('Branding Strategist', 60000, 2),

-- Production
('Lead Producer', 95000, 3),
('Music Producer', 75000, 3),
('Production Assistant', 40000, 3),

-- Engineering
('Lead Engineer', 90000, 4),
('Sound Engineer', 65000, 4),
('Mixing Engineer', 60000, 4),
('Mastering Engineer', 70000, 4),

-- Artist Management
('Artist Manager', 85000, 5),
('Assistant Artist Manager', 50000, 5),

-- HR
('HR Manager', 70000, 6),
('Recruiter', 50000, 6),
('Payroll Specialist', 55000, 6),

-- Legal
('Head of Legal', 120000, 7),
('Contract Specialist', 75000, 7),

-- A&R
('A&R Director', 95000, 8),
('A&R Scout', 55000, 8),

-- Operations and Studio Management
('Studio Manager', 70000, 9),
('Operations Manager', 75000, 9),

-- IT Support
('IT Manager', 80000, 10),
('IT Support Specialist', 50000, 10),

-- Creative Team
('Creative Director', 90000, 11),
('Graphic Designer', 60000, 11),
('Videographer', 55000, 11),

-- Artists (Some artists are directly employed by the label)
('Artist', 75000, 5);

-- Insert initial employees (without manager_id)
INSERT INTO employee (first_name, last_name, role_id) VALUES 
-- Executive Management
('Alex', 'Johnson', 1),  -- CEO
('Dana', 'Fitzgerald', 2),  -- CFO
('Chris', 'Williams', 3),  -- COO

-- Marketing Team
('Jessie', 'Kim', 4),  -- Marketing Manager
('Taylor', 'Brooks', 5),  -- Social Media Specialist
('Jordan', 'Reed', 6),  -- Branding Strategist

-- Production Team
('Michael', 'Henderson', 7),  -- Lead Producer
('Riley', 'Carter', 8),  -- Music Producer
('Pat', 'Sinclair', 8),  -- Music Producer
('Mike', 'Dean', 8),  -- Music Producer
('Casey', 'Dunn', 9),  -- Production Assistant

-- Engineering Team
('David', 'Brown', 10),  -- Lead Engineer
('Jamie', 'Nguyen', 11),  -- Sound Engineer
('Dave', 'Jones', 11),  -- Sound Engineer
('Morgan', 'Sampson', 12),  -- Mixing Engineer
('Sasha', 'Peters', 13),  -- Mastering Engineer

-- Artist Management
('Taylor', 'Adams', 14),  -- Artist Manager
('Jordan', 'Hayes', 14),  -- Artist Manager
('Sam', 'Monroe', 15),  -- Assistant Artist Manager

-- Artists (Directly employed by the label)
('Rachel', 'Green', 30),  -- Artist
('Ross', 'Geller', 30),  -- Artist
('Monica', 'Bing', 30),  -- Artist

-- More Artists (Independent or signed artists with label access)
('Joey', 'Tribbiani', 30),  -- Artist
('Chandler', 'Bing', 30),  -- Artist
('Phoebe', 'Buffay', 30),  -- Artist

-- Additional Staff (Label growing with Assistants or Team Leads)
('Carter', 'Davis', 12),  -- Mixing Engineer
('Alexis', 'Grant', 8),  -- Music Producer
('Harper', 'Lewis', 9),  -- Production Assistant
('Reese', 'Williams', 5),  -- Social Media Specialist

-- HR Department
('Leslie', 'Parker', 16),  -- HR Manager
('Frank', 'Garcia', 17),  -- Recruiter
('Ava', 'Morris', 18),  -- Payroll Specialist

-- Legal Department
('Riley', 'Ford', 19),  -- Head of Legal
('Maya', 'Turner', 20),  -- Contract Specialist

-- A&R Department
('Taylor', 'Adams', 21),  -- A&R Director
('Chris', 'Watts', 22),  -- A&R Scout

-- Operations
('Sarah', 'Lee', 23),  -- Studio Manager
('James', 'Clark', 24),  -- Operations Manager

-- IT Department
('Jesse', 'Brown', 25),  -- IT Manager
('Emma', 'Rodriguez', 26),  -- IT Support Specialist

-- Creative Team
('Chris', 'Rivera', 27),  -- Creative Director
('Alex', 'Sims', 28),  -- Graphic Designer
('Jordan', 'Taylor', 29);  -- Videographer