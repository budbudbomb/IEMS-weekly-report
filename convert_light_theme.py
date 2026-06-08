import re

def main():
    css_path = 'styles.css'
    with open(css_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update variables in :root
    root_match = re.search(r':root\s*\{([\s\S]*?)\}', content)
    if not root_match:
        print("Could not find :root variables in CSS!")
        return

    old_root_vars = root_match.group(1)
    new_root_vars = """
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --bg-card: rgba(255, 255, 255, 0.75);
    --bg-card-hover: rgba(255, 255, 255, 0.95);
    --bg-glass: rgba(15, 23, 42, 0.03);
    --bg-glass-hover: rgba(15, 23, 42, 0.05);

    --text-primary: #0f172a;
    --text-secondary: #475569;
    --text-muted: #64748b;

    --border-subtle: rgba(15, 23, 42, 0.06);
    --border-accent: rgba(99, 102, 241, 0.25);

    --color-done: #16a34a;
    --color-done-bg: rgba(22, 163, 74, 0.08);
    --color-progress: #d97706;
    --color-progress-bg: rgba(217, 119, 6, 0.08);
    --color-pending: #ea580c;
    --color-pending-bg: rgba(234, 88, 12, 0.08);
    --color-not-done: #dc2626;
    --color-not-done-bg: rgba(220, 38, 38, 0.08);
    --color-skipped: #4b5563;
    --color-skipped-bg: rgba(75, 85, 99, 0.08);
    --color-bug: #e11d48;
    --color-bug-bg: rgba(225, 29, 72, 0.08);
    --color-approved: #059669;
    --color-approved-bg: rgba(5, 150, 105, 0.08);
    --color-na: #475569;
    --color-na-bg: rgba(71, 85, 105, 0.08);

    --module-preksha: #4f46e5;
    --module-samadhan: #059669;
    --module-expenditure: #d97706;
    --module-sugamta: #e11d48;
    --module-ipbms: #7c3aed;
    --module-evm: #0891b2;

    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 20px;

    --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.04);
    --shadow-md: 0 4px 20px rgba(15, 23, 42, 0.06);
    --shadow-lg: 0 10px 30px rgba(15, 23, 42, 0.08);

    --font: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
"""
    content = content.replace(old_root_vars, new_root_vars)

    # 2. Update .blob opacity
    content = re.sub(
        r'(\.blob\s*\{[\s\S]*?)opacity:\s*0\.15;',
        r'\g<1>opacity: 0.06;',
        content
    )

    # 3. Update header background
    content = content.replace(
        'background: rgba(6, 8, 15, 0.8);',
        'background: rgba(255, 255, 255, 0.8);'
    )

    # 4. Update logo gradient background
    content = content.replace(
        'background: linear-gradient(135deg, #e8ecf4, #8892a8);',
        'background: linear-gradient(135deg, var(--text-primary), var(--text-secondary));'
    )

    # 5. Update hero title gradient background
    content = content.replace(
        'background: linear-gradient(135deg, #fff 0%, #8892a8 100%);',
        'background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);'
    )

    # 6. Update card hover box shadow
    content = content.replace(
        'box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 60px -10px var(--accent-glow);',
        'box-shadow: var(--shadow-lg), 0 0 40px -10px var(--accent-glow);'
    )

    # 7. Update progress bar background
    content = content.replace(
        'background: rgba(255, 255, 255, 0.06);',
        'background: rgba(15, 23, 42, 0.08);'
    )

    # 8. Update progress fill background gradient end
    content = content.replace(
        'background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, #fff));',
        'background: linear-gradient(90deg, var(--accent), color-mix(in srgb, var(--accent) 60%, var(--bg-secondary)));'
    )

    # 9. Update tabs hover & active backgrounds
    content = content.replace(
        'background: rgba(255, 255, 255, 0.03);\n    color: var(--text-muted);',
        'background: rgba(15, 23, 42, 0.03);\n    color: var(--text-muted);'
    )
    content = content.replace(
        'background: rgba(255, 255, 255, 0.03);\r\n    color: var(--text-muted);',
        'background: rgba(15, 23, 42, 0.03);\r\n    color: var(--text-muted);'
    )
    content = content.replace(
        'background: rgba(255, 255, 255, 0.08);\n    color: var(--text-primary);',
        'background: rgba(15, 23, 42, 0.08);\n    color: var(--text-primary);'
    )
    content = content.replace(
        'background: rgba(255, 255, 255, 0.08);\r\n    color: var(--text-primary);',
        'background: rgba(15, 23, 42, 0.08);\r\n    color: var(--text-primary);'
    )
    # Active tab hover
    content = content.replace(
        'background: rgba(255, 255, 255, 0.08);',
        'background: rgba(15, 23, 42, 0.12);'
    )

    # 10. Update table tr even background
    content = content.replace(
        'background: rgba(255, 255, 255, 0.03);',
        'background: rgba(15, 23, 42, 0.015);'
    )

    # 11. Update table td border bottom
    content = content.replace(
        'border-bottom: 1px solid rgba(255, 255, 255, 0.03);',
        'border-bottom: 1px solid rgba(15, 23, 42, 0.05);'
    )

    # 12. Update webkit scrollbar thumb backgrounds
    content = content.replace(
        'background: rgba(255, 255, 255, 0.1);',
        'background: rgba(15, 23, 42, 0.1);'
    )
    content = content.replace(
        'background: rgba(255, 255, 255, 0.2);',
        'background: rgba(15, 23, 42, 0.2);'
    )

    # 13. Update tooltip text color
    content = content.replace(
        'background: #1e293b;\n    color: var(--text-primary);',
        'background: #1e293b;\n    color: #ffffff;'
    )
    content = content.replace(
        'background: #1e293b;\r\n    color: var(--text-primary);',
        'background: #1e293b;\r\n    color: #ffffff;'
    )

    # 14. Update upload modal overlay
    content = content.replace(
        'background: rgba(3, 4, 8, 0.75);',
        'background: rgba(15, 23, 42, 0.3);'
    )

    # 15. Update toast notification background and text color
    content = content.replace(
        'background: rgba(12, 16, 32, 0.95);\n    border: 1px solid var(--border-subtle);\n    border-left: 4px solid var(--color-done);\n    color: var(--text-primary);',
        'background: rgba(255, 255, 255, 0.95);\n    border: 1px solid var(--border-subtle);\n    border-left: 4px solid var(--color-done);\n    color: #0f172a;'
    )
    content = content.replace(
        'background: rgba(12, 16, 32, 0.95);\r\n    border: 1px solid var(--border-subtle);\r\n    border-left: 4px solid var(--color-done);\r\n    color: var(--text-primary);',
        'background: rgba(255, 255, 255, 0.95);\r\n    border: 1px solid var(--border-subtle);\r\n    border-left: 4px solid var(--color-done);\r\n    color: #0f172a;'
    )

    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Success! Converted styles.css to light theme.")

if __name__ == '__main__':
    main()
