-- Insert initial departments
INSERT INTO department (name) VALUES 
('Executive Management'),
('Marketing'),
('Production'),
('Engineering'),
('Artist Management');

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

-- Artists (Some artists are directly employed by the label)
('Artist', 75000, 5);

-- Insert initial employees (35 employees)
-- Executive Management
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Alex', 'Johnson', 1, NULL),  -- CEO
('Dana', 'Fitzgerald', 2, 1),  -- CFO
('Chris', 'Williams', 3, 1),  -- COO

-- Marketing Team
('Jessie', 'Kim', 4, 1),  -- Marketing Manager
('Taylor', 'Brooks', 5, 4),  -- Social Media Specialist
('Jordan', 'Reed', 6, 4),  -- Branding Strategist

-- Production Team
('Michael', 'Henderson', 7, 1),  -- Lead Producer
('Riley', 'Carter', 8, 7),  -- Music Producer
('Pat', 'Sinclair', 8, 7),  -- Music Producer
('Casey', 'Dunn', 9, 8),  -- Production Assistant

-- Engineering Team
('David', 'Brown', 10, 1),  -- Lead Engineer
('Jamie', 'Nguyen', 11, 10),  -- Sound Engineer
('Morgan', 'Sampson', 12, 10),  -- Mixing Engineer
('Sasha', 'Peters', 13, 10),  -- Mastering Engineer

-- Artist Management
('Taylor', 'Adams', 14, 1),  -- Artist Manager
('Jordan', 'Hayes', 14, 1),  -- Artist Manager
('Sam', 'Monroe', 15, 14),  -- Assistant Artist Manager

-- Artists (Directly employed by the label)
('Rachel', 'Green', 16, 14),  -- Artist managed by Taylor Adams
('Ross', 'Geller', 16, 14),  -- Artist managed by Jordan Hayes
('Monica', 'Bing', 16, 15),  -- Artist managed by Sam Monroe

-- More Artists (Independent or signed artists with label access)
('Joey', 'Tribbiani', 16, 14),  -- Artist
('Chandler', 'Bing', 16, 14),  -- Artist
('Phoebe', 'Buffay', 16, 15);  -- Artist

-- Additional Staff (Label growing with Assistants or Team Leads)
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Carter', 'Davis', 12, 10),  -- Mixing Engineer, under Lead Engineer
('Alexis', 'Grant', 8, 7),  -- Music Producer, under Lead Producer
('Harper', 'Lewis', 9, 7),  -- Production Assistant, under Lead Producer
('Reese', 'Williams', 5, 4);  -- Social Media Specialist, under Marketing Manager