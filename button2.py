#is-primary, is-danger, is-white, is-black
html = """ """

rows = range(39)
rows = [str(i) for i in rows]
cols = range(81)
cols = [str(i) for i in cols]
for row in rows:
    html +=  """<br>\n"""
    for col in cols:
        html += """<button id=\"""" + row + "_" + col + \
            """\" class = "button cell white" > </button >\n"""
    #html += """</div>\n"""
file = open('buttonsblank.html', 'w')
file.write(html)
"""ids = []
for row in rows:
    for col in cols:
        ids.append(row + "_" + col)
print(ids)"""
