import subprocess

php_files = ["gif.php"]#, "index.php", "match.php", "matcharchive.php", "matchstats.php", "output.php", "relay.php", "tournament.php"]

for php_file in php_files:
    output = subprocess.check_output(["php", php_file], universal_newlines=True)
    with open(f"{php_file.replace('.php', '.html')}", "w") as f:
        f.write(output)