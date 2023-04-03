<script language="javascript">
        //desabilita ctrl + s; ctrl + u; ctrl+v; ctr+c; ctrl+p;
        document.onkeydown = function(e) {
            if (e.ctrlKey &&
                (e.keyCode === 67 ||
                    e.keyCode === 85 ||
                    e.keyCode === 80 ||
                    e.keyCode === 83 ||
                    e.keyCode === 117)) {
                return false;
            } else {
                return true;
            }
        };
    </script>
