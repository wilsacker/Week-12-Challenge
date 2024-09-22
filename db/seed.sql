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

-- Insert initial employees with manager_id set properly
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
-- Executive Management (No manager for CEO)
('Alex', 'Johnson', 1, NULL),  -- CEO
('Dana', 'Fitzgerald', 2, 1),  -- CFO reports to CEO
('Chris', 'Williams', 3, 1),  -- COO reports to CEO

-- Marketing Team
('Jessie', 'Kim', 4, 1),  -- Marketing Manager reports to CEO
('Taylor', 'Brooks', 5, 4),  -- Social Media Specialist reports to Marketing Manager
('Jordan', 'Reed', 6, 4),  -- Branding Strategist reports to Marketing Manager

-- Production Team
('Michael', 'Henderson', 7, 1),  -- Lead Producer reports to CEO
('Riley', 'Carter', 8, 7),  -- Music Producer reports to Lead Producer
('Pat', 'Sinclair', 8, 7),  -- Music Producer reports to Lead Producer
('Mike', 'Dean', 8, 7),  -- Music Producer reports to Lead Producer
('Casey', 'Dunn', 9, 8),  -- Production Assistant reports to Music Producer

-- Engineering Team
('David', 'Brown', 10, 1),  -- Lead Engineer reports to CEO
('Jamie', 'Nguyen', 11, 10),  -- Sound Engineer reports to Lead Engineer
('Dave', 'Jones', 11, 10),  -- Sound Engineer reports to Lead Engineer
('Morgan', 'Sampson', 12, 10),  -- Mixing Engineer reports to Lead Engineer
('Sasha', 'Peters', 13, 10),  -- Mastering Engineer reports to Lead Engineer

-- Artist Management
('Taylor', 'Adams', 14, 3),  -- Artist Manager reports to COO
('Jordan', 'Hayes', 14, 3),  -- Artist Manager reports to COO
('Sam', 'Monroe', 15, 14),  -- Assistant Artist Manager reports to Artist Manager

-- Artists (Directly employed by the label)
('Rachel', 'Green', 30, 14),  -- Artist managed by Taylor Adams
('Ross', 'Geller', 30, 14),  -- Artist managed by Jordan Hayes
('Monica', 'Bing', 30, 15),  -- Artist managed by Sam Monroe

-- More Artists (Independent or signed artists with label access)
('Joey', 'Tribbiani', 30, 14),  -- Artist
('Chandler', 'Bing', 30, 14),  -- Artist
('Phoebe', 'Buffay', 30, 15),  -- Artist

-- Additional Staff (Label growing with Assistants or Team Leads)
('Carter', 'Davis', 12, 10),  -- Mixing Engineer reports to Lead Engineer
('Alexis', 'Grant', 8, 7),  -- Music Producer reports to Lead Producer
('Harper', 'Lewis', 9, 7),  -- Production Assistant reports to Lead Producer
('Reese', 'Williams', 5, 4),  -- Social Media Specialist reports to Marketing Manager

-- HR Department
('Leslie', 'Parker', 16, 1),  -- HR Manager reports to CEO
('Frank', 'Garcia', 17, 16),  -- Recruiter reports to HR Manager
('Ava', 'Morris', 18, 16),  -- Payroll Specialist reports to HR Manager

-- Legal Department
('Riley', 'Ford', 19, 1),  -- Head of Legal reports to CEO
('Maya', 'Turner', 20, 19),  -- Contract Specialist reports to Head of Legal

-- A&R Department
('Taylor', 'Adams', 21, 1),  -- A&R Director reports to CEO
('Chris', 'Watts', 22, 21),  -- A&R Scout reports to A&R Director

-- Operations
('Sarah', 'Lee', 23, 1),  -- Studio Manager reports to CEO
('James', 'Clark', 24, 23),  -- Operations Manager reports to Studio Manager

-- IT Department
('Jesse', 'Brown', 25, 1),  -- IT Manager reports to CEO
('Emma', 'Rodriguez', 26, 25),  -- IT Support Specialist reports to IT Manager

-- Creative Team
('Chris', 'Rivera', 27, 1),  -- Creative Director reports to CEO
('Alex', 'Sims', 28, 27),  -- Graphic Designer reports to Creative Director
('Jordan', 'Taylor', 29, 27);  -- Videographer reports to Creative Director