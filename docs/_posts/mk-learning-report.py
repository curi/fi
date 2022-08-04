#!/usr/bin/env python3

from datetime import datetime

d = datetime.now()
ic = d.isocalendar()
iso_date = d.isoformat().split('T')[0]
frontmatter = f"""---
title: "Learning Report: {ic[0]}, week {ic[1]}"
layout: post
date: {iso_date}
parent: Learning Reports
category: Learning Reports
---
"""

import os
from pathlib import Path

p = Path(__file__)
new_lr_file = p.parent / f"{iso_date}-learning-report-{ic[0]}-week-{ic[1]}.md"

if os.path.exists(new_lr_file):
    raise Exception(f"Planned to create {new_lr_file} but a file already exists there!")

with open(new_lr_file, "w") as f:
    f.write(frontmatter)

print(f"""Wrote the below frontmatter to {new_lr_file}

{frontmatter}

You can now edit {new_lr_file} as required.
""")
